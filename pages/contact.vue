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
        from: `${name} <contact@matt-is.gay>`,
        replyTo: email,
        subject,
        text: message
    })

    submitted.value = true;
}
</script>

<template>
    <p v-if="submitted">Thank you for your message! I'll get back to you as soon as I can.</p>
    <FormKit type="form" @submit="sendMail" submit-label="Send" #default="{ value }" v-else>
        <div>
            <FormKit type="text" name="name" id="name" validation="required" label="Name" help="Enter your full name" />
            <FormKit type="email" name="email" id="replyTo" validation="required|email" help="Enter your email address"
                label="Email" />
        </div>

        <FormKit type="text" name="subject" id="subject" validation="required" label="Subject" />
        <FormKit type="textarea" name="message" id="message" validation="required" label="Message" />

        <pre wrap>{{ value }}</pre>
    </FormKit>
</template>


<style scoped>
/* TODO: Add styles */
</style>
