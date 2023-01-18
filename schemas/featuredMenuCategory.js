export default {
    name: "featured",
    type: "document",
    title: "Featured Category",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Featured Menu Category Name",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_description",
            title: "Short Description",
            type: "string",
            validation: (Rule) => Rule.max(200),
        },
        {
            name: "restaurants",
            type: "array",
            title: "Restaurants",
            of: [{type: "reference", to: [{type: "restaurant"}]}]
        },
    ]
}