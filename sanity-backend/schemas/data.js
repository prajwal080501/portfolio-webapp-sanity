export default {
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
        },
        {
            name: 'twitterLink',
            type: 'string',
            title: 'Twitter Link'
        },
        {
            name: 'githubLink',
            type: 'string',
            title: 'Github Link'
        },
        {
            name: 'instagramLink',
            type: 'string',
            title: 'Instagram Link'
        },
        {
            name: 'linkedinLink',
            type: 'string',
            title: 'Linkedin Link'
        },
        {
            name: 'mobileNo',
            type: 'string',
            title: 'Mobile No'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address'
        }
    ]
}