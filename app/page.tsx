import { getPageData } from '@/lib/butter'
import { headers, cookies } from 'next/headers';
import type { Metadata } from 'next'
import ComponentRenderer from '@/components/ComponentRender'
import { PageMarginWrapper } from '@/components/_layouts'
import { PageProps } from '@/definitions/interfaces/general'

export const generateMetadata = async (
  {searchParams}: PageProps
): Promise<Metadata> => {
  const resolvedSearchParams = await searchParams;
  const headersList = await headers()
  const path = headersList.get("x-pathname")
  const isPreview =
    (typeof resolvedSearchParams?.preview === 'string' &&
    resolvedSearchParams.preview === '1') ? 'preview=1' : ''
  const pageData = await getPageData(isPreview, path as string)
  const {
    seo
  } = pageData as any
  return {
    title: seo?.title,
    description: seo?.description,
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: `https://butter-chs-demo-3j7c.vercel.app${path}`,
      images: [
        {
          url: seo?.open_graph_image?.url
        }
      ]
    }
  }
}

export default async function Home() {
  const headersList = await headers()
  const isPreview = headersList.get("x-search-param")
  const path = headersList.get("x-pathname")
  const cookieStore = await cookies()
  const abTestCookie = (!cookieStore?.get('version-a') && !cookieStore?.get('version-a')) ? 'a' : (cookieStore?.get('version-a')?.value === 'true' ? 'a' : 'b')
  const pageContent = await getPageData(isPreview as string, path as string, '*', abTestCookie)
  const {
    body
  } = pageContent as any
  console.log('body,', body)
  return (
    <main>
      <PageMarginWrapper>
        {body?.map(({type, fields: sectionData}: any, index: number) => {
          return (
            <ComponentRenderer
              key={type + index}
              type={type}
              sectionData={sectionData}
            />
          )
        })}
      </PageMarginWrapper>
    </main>
  );
}
