import { RegistrationForm } from "~/components/listing/registration-form";

export default function RegistrationPage() {

    return (
        <section className="mx-6 lg:container bg-white grid gap-10 py-10 rounded-lg shadow">
            <h1 className="text-center font-montserrat text-4xl text-primary">Registration Process</h1>
            <RegistrationForm />
        </section>
    );
}
