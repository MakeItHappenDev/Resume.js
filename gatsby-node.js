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
            page:data[0].pages[0].name,
            canonical:`/${data[0].lang.toLowerCase()}/${data[0].pages[0].name.toLowerCase()}`,
            data:data[0].pages[0].data
        }
    })

    //Create the /lang pages

    data.forEach(resume => {
        //resume = resume in one specific language
        await createPage({
            path:`/${resume.lang}`,
            component:templatePage,
            context:{
                lang:resume.lang,
                meta:resume.metadata,
                page:resume.pages[0].name,
                canonical:`/${resume.lang.toLowerCase()}/${resume.pages[0].name.toLowerCase()}`,
                data:resume.pages[0].data
            }
        })

        //Create /lang/page pages
        resume.pages.forEach(page => {
            //page = a section of the resume
            await createPage({
                path:`/${resume.lang}/${page.name}`,
                component:templatePage,
                context:{
                    lang:resume.lang,
                    meta:resume.metadata,
                    page:page.name,
                    canonical:`/${resume.lang.toLowerCase()}/${page.name.toLowerCase()}`,
                    data:page.data
                }
            })
        })

        
    });

}