'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contentDetector, ContentDetectorInput, ContentDetectorOutput } from '@/ai/flows/content-detector';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const formSchema = z.object({
  inputText: z.string().min(10, {
    message: 'Please enter at least 10 characters to analyze.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContentDetectorFormProps {
  portfolioContent: string;
}

export function ContentDetectorForm({ portfolioContent }: ContentDetectorFormProps) {
  const [result, setResult] = useState<ContentDetectorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const input: ContentDetectorInput = {
        portfolioContent,
        inputText: data.inputText,
      };
      const response = await contentDetector(input);
      setResult(response);
    } catch (error) {
      console.error('Content detection failed:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to analyze content. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="inputText"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Text to analyze</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste a job description or any text here..."
                    className="min-h-[150px] bg-white dark:bg-slate-900"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Analyze Content
              </>
            )}
          </Button>
        </form>
      </Form>

      {result && (
        <Card className="mt-6" style={{backgroundColor: "hsl(var(--accent) / 0.1)"}}>
          <CardContent className="p-6">
            <div className="flex items-center justify-center text-center">
                <Sparkles className="w-8 h-8 mr-4 text-accent" />
                <div>
                    <p className="text-sm text-muted-foreground">Analysis Complete</p>
                    <p className="text-2xl font-bold font-headline">
                    <span className="text-accent">{result.conceptCount}</span> concept
                    {result.conceptCount !== 1 ? 's' : ''} from my portfolio found.
                    </p>
                </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
