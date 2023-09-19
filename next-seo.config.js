/* eslint-disable import/no-anonymous-default-export */

export default {
  // %s에는 NextSeo 태그에 작성해놓은 title이 들어가게 된다.
  // ex) 건강증진센터 위치서비스 - 페이지
  titleTemplate: '%s - 페이지',
  openGraph: {
    type: 'website',
    site_name: '건강증진센터 위치보기 서비스',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
};
