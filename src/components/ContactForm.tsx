"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLocale } from 'next-intl';


import { Link } from '@/src/lib/routing'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { PRIVACY_POLICY_ROUTE } from "@/src/constants/routes"
import { useToast } from "@/src/hooks/use-toast"

// Define the shape of the contactTranslations prop
interface ContactTranslations {
  labelPrivacyPolicy: string;
  privacyLabel: string;
  privacyError: string;
  privacyPolicy: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  successMessage: string;
  errorMessage: string;
  errorOccurred: string;
  ValidationMessages: {
    name: {
      minLength: string;
    };
    phone: {
      invalid: string;
      length: string;
    };
    message: {
      minLength: string;
    };
  };
}

// Define the shape of the form values
interface FormValues {
  name: string;
  phone: string;
  message: string;
  privacyConsent: boolean;
}

export function ContactForm({ contactTranslations }: { contactTranslations: ContactTranslations }) {
  const locale = useLocale()
  const { toast } = useToast()
  const formSchema = z.object({
    name: z.string().min(3, {
      message: contactTranslations.ValidationMessages.name.minLength,
    }),
    phone: z.string()
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: contactTranslations.ValidationMessages.phone.invalid,
      })
      .refine((value) => {
        const digits = value.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 15;
      }, {
        message: contactTranslations.ValidationMessages.phone.length,
      }),
    message: z.string().min(10, {
      message: contactTranslations.ValidationMessages.message.minLength,
    }),
    privacyConsent: z.boolean().refine((val) => val === true, {
      message: contactTranslations.privacyError,
    }),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch(`/${locale}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast({
          title: "Success",
          description: contactTranslations.successMessage,
          duration: 15000
        })
        form.reset();
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: `${contactTranslations.errorMessage} ${errorData.error}`,
          variant: "destructive",
          duration: 15000
        })
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: contactTranslations.errorOccurred,
        variant: "destructive",
        duration: 15000
      })
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className='text-destructive'>*</span>
                {contactTranslations.nameLabel}
              </FormLabel>
              <FormControl>
                <Input placeholder={contactTranslations.namePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className='text-destructive'>*</span>
                {contactTranslations.phoneLabel}
              </FormLabel>
              <FormControl>
                <Input placeholder={contactTranslations.phonePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactTranslations.messageLabel}</FormLabel>
              <FormControl>
                <Textarea placeholder={contactTranslations.messagePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{contactTranslations.submitButton}</Button>

        <FormField
          control={form.control}
          name="privacyConsent"
          render={({ field }) => (
            <FormItem className='space-x-2'>
              <div className='flex items-center space-x-2'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className='w-5 h-5'
                  />
                </FormControl>
                <FormLabel className='text-lg font-light'>
                  <span className='text-destructive text-lg font-light'>*</span>
                  {contactTranslations.privacyLabel}
                  <Button
                    variant="link"
                    asChild
                    className="pl-1 hover:underline text-lg font-light inline"
                    aria-label={contactTranslations.labelPrivacyPolicy}
                  >
                    <Link href={PRIVACY_POLICY_ROUTE}>{contactTranslations.privacyPolicy}</Link>
                  </Button>
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
