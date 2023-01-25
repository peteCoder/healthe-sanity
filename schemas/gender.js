export default {
    name: 'gender',
    type: 'document',
    title: 'Gender',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
        
    ]
}