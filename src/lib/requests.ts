import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (name: string, phone: string, email?: string, service?: string) => {
    try {
        await emailjs.send(
            serviceId,
            templateId,
            { name, phone, to_name: "Vantera", email, service },
            { publicKey: publicKey },
        );
    } catch (error) {
        console.log(error);
    }
};
