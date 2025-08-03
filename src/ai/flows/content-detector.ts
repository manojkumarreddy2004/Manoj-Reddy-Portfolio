// This file uses Genkit to create a content detector flow.

'use server';

/**
 * @fileOverview Determines how many concepts from a portfolio are present in a given text.
 *
 * - `contentDetector` - A function that takes text input and determines how many concepts from the portfolio are present in it.
 * - `ContentDetectorInput` - The input type for the `contentDetector` function.
 * - `ContentDetectorOutput` - The return type for the `contentDetector` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentDetectorInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The entire text content of the portfolio.'),
  inputText: z
    .string()
    .describe('The text to compare against the portfolio content.'),
});
export type ContentDetectorInput = z.infer<typeof ContentDetectorInputSchema>;

const ContentDetectorOutputSchema = z.object({
  conceptCount: z
    .number()
    .describe(
      'The number of concepts from the portfolio that are present in the input text.'
    ),
});
export type ContentDetectorOutput = z.infer<typeof ContentDetectorOutputSchema>;

export async function contentDetector(input: ContentDetectorInput): Promise<ContentDetectorOutput> {
  return contentDetectorFlow(input);
}

const contentDetectorPrompt = ai.definePrompt({
  name: 'contentDetectorPrompt',
  input: {schema: ContentDetectorInputSchema},
  output: {schema: ContentDetectorOutputSchema},
  prompt: `You are an expert content analyzer.

You will receive the entire text content of a portfolio and a text input to compare against the portfolio.

Your task is to determine how many concepts from the portfolio are present in the input text.

Portfolio Content: {{{portfolioContent}}}

Input Text: {{{inputText}}}

Return only a number representing the amount of concepts found in the input text that are also in the portfolio content. Be very conservative when assessing concept overlap.

{{#each safetySettings}}
  Category: {{category}}, Threshold: {{threshold}}
{{/each}}`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const contentDetectorFlow = ai.defineFlow(
  {
    name: 'contentDetectorFlow',
    inputSchema: ContentDetectorInputSchema,
    outputSchema: ContentDetectorOutputSchema,
  },
  async input => {
    const {output} = await contentDetectorPrompt(input);
    return output!;
  }
);
