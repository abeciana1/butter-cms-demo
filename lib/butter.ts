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

export const getPageData = (isPreview: string, slug: string, pageType = '*', abTestCookie: 'a' | 'b' | '' = 'a') => {
  const page = slug === '/' ? `homepage-${abTestCookie}` : slug.split('/')[slug.split('/')?.length - 1]
  return butter.page.retrieve(pageType, page, {
    preview: isPreview === 'preview=1' ? 1 : 0,
    alt_media_text: 1,
    levels: 3,
    "fields.version": abTestCookie
  } as any)
  .then(function(resp) {
      return resp.data?.data?.fields
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

export const personalizationDataFetch = (modelName: string, page_size: number = 10, page: number = 1, cookieTarget: string) => {
  return butter.content.retrieve([modelName], {
    page_size: page_size,
    page: page,
    alt_media_text: 1,
    "fields.cookie_target": cookieTarget
  } as any)
  .then(function(resp) {
      return resp?.data?.data
  })
  .catch(function(resp) {
      console.log(resp)
  });
}

export const blogPostDataFetch = (isPreview: string, path: string) => {
  const blogPath = path.split("/post/")[1]
  return butter.post.retrieve(blogPath, {
    preview: isPreview === 'preview=1' ? 1 : 0
  })
    .then(function(resp) {
      return resp?.data?.data
    })
    .catch(function(resp) {
        console.log(resp)
    });
}

interface BlogEngineListI {
  page: number;
  page_size: number;
  exclude_body: boolean;
  category_slug: string;
}

export const blogEnglinePostListFetch = (params: BlogEngineListI) => {
  return butter.post.list(params)
  .then(function(resp) {
    return resp?.data?.data
  }).catch(function(resp) {
    console.log(resp)
  });
}