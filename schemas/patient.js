export default {
    name: 'patient',
    type: 'document',
    title: 'Patient',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'number',
        },
        {
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'patientType',
            title: 'Patient Type',
            type: 'reference',
            to: { type: 'patientType' }
        },
        {
            title: 'Date of Birth',
            name: 'dateOfBirth',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD'
            }
        },

    ]
}