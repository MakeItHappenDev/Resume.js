const path = require('path')
const json = require('./src/data/resume.json')

exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    const templatePage = path.resolve('./src/templates/page.js')
    const data = json.data.fetchResumes

    //Creating the / page with default lang / page section
    await createPage({
        path:'/',
        component:templatePage,
        context:{
            lang:data[0].lang,
            meta:data[0].metadata,
            static:data[0].static,
            page:data[0].pages[0].name,
            canonical:`/${data[0].lang.toLowerCase()}/${data[0].pages[0].name.toLowerCase()}`,
            data:data[0].pages[0].data
        }
    })

    //Create the /lang pages

    data.forEach(async resume => {
        //resume = resume in one specific language
        await createPage({
            path:`/${resume.lang.toLowerCase()}`,
            component:templatePage,
            context:{
                lang:resume.lang,
                meta:resume.metadata,
                meta:resume.static,
                page:resume.pages[0].name,
                canonical:`/${resume.lang.toLowerCase()}/${resume.pages[0].name.toLowerCase()}`,
                data:resume.pages[0].data
            }
        })

        //Create /lang/page pages
        resume.pages.forEach(async page => {
            //page = a section of the resume
            await createPage({
                path:`/${resume.lang.toLowerCase()}/${page.name.toLowerCase()}`,
                component:templatePage,
                context:{
                    lang:resume.lang,
                    meta:resume.metadata,
                    static:resume.static,
                    page:page.name,
                    canonical:`/${resume.lang.toLowerCase()}/${page.name.toLowerCase()}`,
                    data:page.data
                }
            })
        })

        
    });

}