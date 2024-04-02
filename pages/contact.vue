<script setup lang="ts">
const mail = useMail();
const submitted = ref(false);

type Fields = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const sendMail = (fields: Fields) => {

    const { name, email, subject, message } = fields;

    mail.send({
        from: `${name} via Contact Form <no-reply.contact-form@matt-is.gay>`,
        replyTo: email,
        subject,
        text: message
    })

    submitted.value = true;
}
</script>

<template>
    <section>
        <p v-if="submitted">Thank you for your message! I'll get back to you as soon as I can.</p>
        <FormKit type="form" @submit="sendMail" submit-label="Send" v-else>
            <div class="inline">
                <FormKit type="text" name="name" id="name" validation="required" label="Name"
                    help="Enter your full name" />
                <FormKit type="email" name="email" id="replyTo" validation="required|email"
                    help="Enter your email address" label="Email" />
            </div>

            <FormKit type="text" name="subject" id="subject" validation="required" label="Subject"
                :classes="{ outer: '$remove:max-w-[20em] max-w-full' }" />
            <FormKit type="textarea" name="message" id="message" validation="required" label="Message"
                :classes="{ outer: '$remove:max-w-[20em] max-w-full' }" />
        </FormKit>
    </section>
</template>

<style scoped>
section {
    margin: 3rem 0;
}

.inline {
    display: flex;
    gap: 1rem;
}

@media (max-width: 768px) {
    .inline {
        flex-direction: column;
    }
}
</style>