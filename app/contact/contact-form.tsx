"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { submitContactForm } from "./contact-action";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { EnterpriseButton } from "@/components/ui/enterprise-button";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldLegend,
    FieldTitle,
} from "@/components/ui/field";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "",
            company: "",
            useCase: "",
            deployment: undefined,
        },
    });

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true);

        try {
            const result = await submitContactForm(data);

            if (result.success) {
                toast.success("Message sent successfully!", {
                    description:
                        "We'll review your architecture needs and get back to you within 1-2 business days.",
                });
                form.reset();
            } else {
                toast.error("Failed to send message", {
                    description:
                        result.error ||
                        "Something went wrong. Please try again or email us directly.",
                });
            }
        } catch {
            toast.error("Something went wrong", {
                description: "Please try again or email us directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form
            id="contact-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
        >
            <FieldGroup>
                {/* Name & Email row */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid || undefined}>
                                <FieldLabel htmlFor="contact-name">Name *</FieldLabel>
                                <Input
                                    id="contact-name"
                                    placeholder="Jane Doe"
                                    aria-invalid={fieldState.invalid}
                                    {...field}
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid || undefined}>
                                <FieldLabel htmlFor="contact-email">Email *</FieldLabel>
                                <Input
                                    id="contact-email"
                                    type="email"
                                    placeholder="jane@company.com"
                                    aria-invalid={fieldState.invalid}
                                    {...field}
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </div>

                {/* Role & Company row */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Controller
                        name="role"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid || undefined}>
                                <FieldLabel htmlFor="contact-role">Role</FieldLabel>
                                <Input
                                    id="contact-role"
                                    placeholder="CTO, VP of Engineering"
                                    aria-invalid={fieldState.invalid}
                                    {...field}
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name="company"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid || undefined}>
                                <FieldLabel htmlFor="contact-company">Company</FieldLabel>
                                <Input
                                    id="contact-company"
                                    placeholder="Acme Corp"
                                    aria-invalid={fieldState.invalid}
                                    {...field}
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </div>

                {/* Use Case */}
                <Controller
                    name="useCase"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid || undefined}>
                            <FieldLabel htmlFor="contact-usecase">
                                Use Case Summary *
                            </FieldLabel>
                            <Textarea
                                id="contact-usecase"
                                rows={4}
                                placeholder="We are looking to deploy internal agents for..."
                                className="resize-none"
                                aria-invalid={fieldState.invalid}
                                {...field}
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Deployment Preference */}
                <Controller
                    name="deployment"
                    control={form.control}
                    render={({ field, fieldState }) => {
                        const isInvalid = fieldState.invalid;
                        return (
                            <FieldSet data-invalid={isInvalid || undefined}>
                                <FieldLegend variant="label">
                                    Deployment Preference *
                                </FieldLegend>
                                <RadioGroup
                                    name={field.name}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    aria-invalid={isInvalid}
                                    className="grid sm:grid-cols-2 gap-4"
                                >
                                    <FieldLabel htmlFor="deployment-on-premises">
                                        <Field orientation="horizontal">
                                            <RadioGroupItem
                                                value="on-premises"
                                                id="deployment-on-premises"
                                            />
                                            <FieldContent>
                                                <FieldTitle>On-Premises</FieldTitle>
                                                <FieldDescription>
                                                    Deploy on your own infrastructure
                                                </FieldDescription>
                                            </FieldContent>
                                        </Field>
                                    </FieldLabel>
                                    <FieldLabel htmlFor="deployment-private-cloud">
                                        <Field orientation="horizontal">
                                            <RadioGroupItem
                                                value="private-cloud"
                                                id="deployment-private-cloud"
                                            />
                                            <FieldContent>
                                                <FieldTitle>Private Cloud</FieldTitle>
                                                <FieldDescription>
                                                    Deploy on a private cloud environment
                                                </FieldDescription>
                                            </FieldContent>
                                        </Field>
                                    </FieldLabel>
                                </RadioGroup>
                                {isInvalid && <FieldError errors={[fieldState.error]} />}
                            </FieldSet>
                        );
                    }}
                />
            </FieldGroup>

            {/* Submit */}
            <div className="pt-4">
                <EnterpriseButton
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Request Architecture Review
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                    )}
                </EnterpriseButton>
            </div>
        </form>
    );
}
