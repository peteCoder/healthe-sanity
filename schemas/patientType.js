export default {
    name: 'patientType',
    type: 'document',
    title: 'Patient Type',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
        
    ]
}