'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Label } from "~/components/ui/label"
import { CldUploadWidget, type CloudinaryUploadWidgetResults } from "next-cloudinary";

const formSchema = z.object({
    fullName: z.string({ required_error: 'Field is required.' }).min(2, "Full Name is required."),
    phone: z.string({ required_error: 'Field is required.' }).min(10, "Valid contact number required."),
    email: z.string({ required_error: 'Field is required.' }).email("Invalid email."),
    address: z.string({ required_error: 'Field is required.' }),
    password: z.string({ required_error: 'Field is required.' }).min(8, 'Minimium 8 character lenght required.'),
    registerType: z.enum(["Artisan", "Business", "Institution"]),
    craftSpecialty: z.string({ required_error: 'Field is required' }),
    craftSkill: z.enum(["Master", "Skilled", "Semi-Skilled", "Apprentice"]),
    craftExperience: z.number({ required_error: 'Field is required.' }),
    craftAward: z.string({ required_error: 'Field is required.' }).optional(),
    market: z.enum(["Local", "National", "International"]),
    businessName: z.string({ required_error: 'Filed is required.' }),
    businessEmail: z.string({ required_error: 'Filed is required.' }).email("Invalid email."),
    businessAddress: z.string({ required_error: 'Field is required.' }),
    businessType: z.enum(["Large Enterprise", "Mid-sized Business", "Small Business", "Startup"]),
    businessSold: z.string({ required_error: 'Field is required.' }),
    businessEmployee: z.string({ required_error: 'Field is required.' }),
    instituteName: z.string({ required_error: 'Field is required.' }),
    instituteEmail: z.string({ required_error: 'Filed is required.' }).email("Invalid email."),
    instituteType: z.enum(["Governance", "NGO", "Training Body", "Educational Body"]),
    instituteAddress: z.string({ required_error: 'Field is required.' }),
    instituteMission: z.string({ required_error: 'Field is required' }),
})

type FormProps = z.infer<typeof formSchema>

export const RegistrationForm = () => {

    const [files, setFiles] = useState<string[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const form = useForm<FormProps>({
        resolver: zodResolver(formSchema)
    })

    const formSubmission = (data: FormProps) => {

        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(formSubmission)} className="flex flex-col gap-16">
                <Card>
                    <CardHeader>
                        <CardTitle>General information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem className="col-span-2 lg:col-span-1">
                                    <FormLabel>Full name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your full name" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="col-span-2 lg:col-span-1">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="col-span-2 lg:col-span-1">
                                    <FormLabel>Contact number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your phone no." {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="col-span-3 lg:col-span-1">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your address" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={visible ? "text" : "password"}
                                                placeholder="Enter your password"
                                                {...field}
                                                value={field.value ?? ""}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3 py-2"
                                                onClick={() => setVisible(!visible)}
                                            >
                                                {visible ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="registerType"
                            render={({ field }) => (
                                <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                    <FormLabel>Registration type</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            {...field}
                                            value={field.value ?? ''}
                                            onValueChange={field.onChange}
                                            className="flex items-center">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Artisan" id="Artisan" />
                                                <Label htmlFor="Artisan">Artisan</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Business" id="Business" />
                                                <Label htmlFor="Business">Business</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Institution" id="Institution" />
                                                <Label htmlFor="Institution">Institution</Label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
                {
                    form.watch('registerType') == 'Artisan' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Artisan information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="craftSpecialty"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Craft Specialty</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your specialty" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="craftSkill"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                            <FormLabel>Craft skill</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onValueChange={field.onChange}
                                                    className="flex items-center">
                                                    {
                                                        ["Master", "Skilled", "Semi-Skilled", "Apprentice"]
                                                            .map((skill, index) => <div
                                                                className="flex items-center space-x-2"
                                                                key={index}>
                                                                <RadioGroupItem value={skill} id={skill} />
                                                                <Label htmlFor={skill}>{skill}</Label>
                                                            </div>)
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="craftExperience"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Years of experience</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your experience"
                                                    {...field} value={field.value ?? ''}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        if (
                                                            value === "" ||
                                                            (/^\d+$/.test(value) && parseInt(value) > 0)
                                                        ) {
                                                            field.onChange(value === "" ? undefined : parseInt(value));
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="craftAward"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Notable Awards or Recognitions (if any)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your notable awards or recognitions" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="craftSpecialty"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Craft Specialty</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your specialty" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="market"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                            <FormLabel>Craft Market Reach</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onValueChange={field.onChange}
                                                    className="flex items-center">
                                                    {
                                                        ["Local", "National", "International"]
                                                            .map((skill, index) => <div
                                                                className="flex items-center space-x-2"
                                                                key={index}>
                                                                <RadioGroupItem value={skill} id={skill} />
                                                                <Label htmlFor={skill}>{skill}</Label>
                                                            </div>)
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="col-span-3 lg:col-span-1 grid gap-2">
                                    <FormLabel>Upload Documents</FormLabel>
                                    <CldUploadWidget
                                        options={{ sources: ["local"] }}
                                        uploadPreset="craftlore"
                                        onSuccess={(result: CloudinaryUploadWidgetResults) => {
                                            const info = result.info;
                                            if (typeof info != "string")
                                                setFiles((prev) => {
                                                    const flag = prev.every(
                                                        (file) => file != info?.secure_url,
                                                    );
                                                    if (flag) prev.push(info?.secure_url ?? "");
                                                    return prev;
                                                });
                                            // setAllow(true);
                                        }}
                                    >
                                        {({ open }) => {
                                            function handleOnClick() {
                                                open();
                                            }
                                            return (
                                                <Button type="button" onClick={handleOnClick} className="w-fit bg-primary text-white ">
                                                    Upload files
                                                </Button>
                                            );
                                        }}
                                    </CldUploadWidget>
                                </div>
                            </CardContent>
                        </Card>
                    )
                }
                {
                    form.watch('registerType') == 'Business' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Business information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="businessName"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Business name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your business name" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessEmail"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Business email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your business email" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessAddress"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Business address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your business address" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessSold"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Craft Sold</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your craft which you are selling" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="market"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                            <FormLabel>Craft Market Reach</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onValueChange={field.onChange}
                                                    className="flex items-center">
                                                    {
                                                        ["Local", "National", "International"]
                                                            .map((skill, index) => <div
                                                                className="flex items-center space-x-2"
                                                                key={index}>
                                                                <RadioGroupItem value={skill} id={skill} />
                                                                <Label htmlFor={skill}>{skill}</Label>
                                                            </div>)
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessEmployee"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Number of employee</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter number of employee"
                                                    {...field} value={field.value ?? ''}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        if (
                                                            value === "" ||
                                                            (/^\d+$/.test(value) && parseInt(value) > 0)
                                                        ) {
                                                            field.onChange(value === "" ? undefined : parseInt(value));
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="col-span-3 lg:col-span-1 grid gap-2">
                                    <FormLabel>Upload Documents</FormLabel>
                                    <CldUploadWidget
                                        options={{ sources: ["local"] }}
                                        uploadPreset="craftlore"
                                        onSuccess={(result: CloudinaryUploadWidgetResults) => {
                                            const info = result.info;
                                            if (typeof info != "string")
                                                setFiles((prev) => {
                                                    const flag = prev.every(
                                                        (file) => file != info?.secure_url,
                                                    );
                                                    if (flag) prev.push(info?.secure_url ?? "");
                                                    return prev;
                                                });
                                            // setAllow(true);
                                        }}
                                    >
                                        {({ open }) => {
                                            function handleOnClick() {
                                                open();
                                            }
                                            return (
                                                <Button type="button" onClick={handleOnClick} className="w-fit bg-primary text-white ">
                                                    Upload files
                                                </Button>
                                            );
                                        }}
                                    </CldUploadWidget>
                                </div>
                            </CardContent>
                        </Card>
                    )
                }
                {
                    form.watch('registerType') == 'Institution' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Institution information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="instituteName"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute name" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instituteEmail"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute email" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instituteAddress"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute address" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instituteType"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                            <FormLabel>Institute type</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onValueChange={field.onChange}
                                                    className="flex items-center">
                                                    {
                                                        ["Governance", "NGO", "Training Body", "Educational Body"]
                                                            .map((skill, index) => <div
                                                                className="flex items-center space-x-2"
                                                                key={index}>
                                                                <RadioGroupItem value={skill} id={skill} />
                                                                <Label htmlFor={skill}>{skill}</Label>
                                                            </div>)
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                  <FormField
                                    control={form.control}
                                    name="instituteMission"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute mission</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute mission" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="col-span-3 lg:col-span-1 grid gap-2">
                                    <FormLabel>Upload Documents</FormLabel>
                                    <CldUploadWidget
                                        options={{ sources: ["local"] }}
                                        uploadPreset="craftlore"
                                        onSuccess={(result: CloudinaryUploadWidgetResults) => {
                                            const info = result.info;
                                            if (typeof info != "string")
                                                setFiles((prev) => {
                                                    const flag = prev.every(
                                                        (file) => file != info?.secure_url,
                                                    );
                                                    if (flag) prev.push(info?.secure_url ?? "");
                                                    return prev;
                                                });
                                            // setAllow(true);
                                        }}
                                    >
                                        {({ open }) => {
                                            function handleOnClick() {
                                                open();
                                            }
                                            return (
                                                <Button type="button" onClick={handleOnClick} className="w-fit bg-primary text-white ">
                                                    Upload files
                                                </Button>
                                            );
                                        }}
                                    </CldUploadWidget>
                                </div>
                            </CardContent>
                        </Card>
                    )
                }

                <Button type="submit" className="col-span-2">
                    Submit
                </Button>
            </form>
        </Form>
    )
}