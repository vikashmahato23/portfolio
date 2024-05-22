"use client";

import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import NextImage from "@/components/NextImage";

export default function page() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await emailjs
        .sendForm(
          "service_k5pc6s8",
          "template_sppclel",
          e.target,
          "isvh0FYFC_ayJbPxP"
        )
        .then(() => {
          toast.success("Email Sent Successfully");
        }),
        e.target.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex animate_in flex-col min-h-full justify-center items-center">
      <h1 className="text-3xl font-semibold text-center my-10">Contact</h1>
      <div className="flex flex-col md:flex-row lg:w-[70%] items-center justify-around">
        <Card className="w-[90vw] lg:w-[500px]">
          <CardHeader className="text-center font-semibold">
            Feel Free To Write Anything
          </CardHeader>
          <CardContent>
            <form onSubmit={sendEmail}>
              <div className="grid w-full items-center gap-1.5 my-5">
                <Label htmlFor="name">Name*</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5 my-5">
                <Label htmlFor="email">Email*</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5 my-5">
                <Label htmlFor="message">Mesaage*</Label>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <div>
                <Button
                  disabled={isSubmitting}
                  variant="secondary"
                  className="w-full"
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="lg:w-[500px] hidden lg:block">
          <NextImage
            height={500}
            width={500}
            className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]"
            src="/contact.svg"
            alt="contactimg"
          />
        </div>
      </div>
    </div>
  );
}
