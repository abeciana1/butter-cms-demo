import Butter, { ButterStatic } from 'buttercms';

let butter: ButterStatic;

try {
  butter = Butter(process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY as string)
}
catch (e) {
  console.log(e)
}

type PageLookUpT = {
  [key: string]: string;
}

export const pageTypeLookup: PageLookUpT = {
  "blog": "custom_blog_page"
}

export const getNavMenu = (isPreview: string, modelName: string, slug: string) => {
    return butter.page.retrieve(modelName, slug, {
      preview: isPreview === 'preview=1' ? 1 : 0,
      alt_media_text: 1
    } as any)
    .then(function(resp) {
        return resp.data
    })
    .catch(function(resp) {
        console.log(resp)
    });
}

export const getPageData = (isPreview: string, slug: string, pageType = '*') => {
  const page = slug === '/' ? 'homepage' : slug.split('/')[slug.split('/')?.length - 1]
  return butter.page.retrieve(pageType, page, {
    preview: isPreview === 'preview=1' ? 1 : 0,
    alt_media_text: 1,
    levels: 3
  } as any)
  .then(function(resp) {
      console.log('resp', resp)
      return resp.data
  })
  .catch(function(resp) {
      console.log('resp', resp)
  });
}

export const collectionDataFetch = (modelName: string, page_size: number = 10, page: number = 1) => {
  return butter.content.retrieve([modelName], {
    page_size: page_size,
    page: page,
    alt_media_text: 1,
  } as any)
  .then(function(resp) {
      return resp?.data?.data
  })
  .catch(function(resp) {
      console.log(resp)
  });
}