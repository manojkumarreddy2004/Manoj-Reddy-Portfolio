'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';

export function VideoResumeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Video className="mr-2 h-4 w-4" />
          Video Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Video Resume</DialogTitle>
          <DialogDescription>
            Scan the QR code with your phone to watch my video resume.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center p-4">
          <Image
            src="https://placehold.co/250x250.png"
            alt="Video Resume QR Code"
            width={250}
            height={250}
            className="rounded-lg shadow-md"
            data-ai-hint="qr code"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
