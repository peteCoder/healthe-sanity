export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'displayName',
            title: 'Display Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'photoUrl',
            title: 'Photo',
            type: 'string',
        },
        {
            name: 'phoneNumber',
            title: 'PhoneNumber',
            type: 'string',
        },
        

    ]
}