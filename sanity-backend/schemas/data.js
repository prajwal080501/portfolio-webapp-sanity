export default{
    name: 'data',
    type: 'document',
    title: 'Data',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }
    ]
}