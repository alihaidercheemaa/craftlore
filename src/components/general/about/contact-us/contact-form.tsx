'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"



const formSchema = z.object({
    firstName: z.string({ required_error: 'Field is required.' }),
    lastName: z.string({ required_error: 'Field is required.' }),
    phone: z.string({ required_error: 'Field is required.' }),
    email: z.string({ required_error: 'Field is required.' }).email({ message: 'Email format is wrong' }),
    message: z.string({ required_error: 'Field is required.' })
})

export const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const formSubmission = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <div className="col-span-2 grid gap-4">
            <h3 className="font-montserrat text-xl">Contact us</h3>
            <h2 className="font-montserrat text-3xl">How can we help you?</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(formSubmission)} className="grid grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter first name" {...field} value={field.value ?? ''} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter last name" {...field} value={field.value ?? ''} />
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
                                <FormControl>
                                    <Input placeholder="Enter your phone" {...field} value={field.value ?? ''} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} value={field.value ?? ''} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter your message"
                                        className="resize-none"
                                        {...field}
                                        value={field.value ?? ''}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant={'secondary'} className="w-fit">
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}