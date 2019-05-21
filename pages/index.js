import Head from "next/head";
import styled from "styled-components";
import NextSeo from "next-seo";

import Header from "../components/header";

function Index() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/static/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/static/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/static/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/static/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/static/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/static/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/static/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="/static/favicons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/static/favicons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/static/favicons/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/static/favicons/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/static/favicons/mstile-310x310.png"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Cousine:400,700&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `  window.productHuntUpcoming = {
                        appId: 17824,
                        position: 'bottomLeft',
                      };

                      (function(doc, scr, src, a, b) {
                        a = doc.createElement(scr);
                        b = doc.getElementsByTagName(scr)[0];
                        a.async = true;
                        a.src = src;
                        b.parentNode.insertBefore(a, b);
                      })(document, 'script', 'https://assets.producthunt.com/assets/upwigloader.js');`
          }}
        />
      </Head>
      <style jsx global>{`
        body {
          background: #1f1f1f;
          margin: 0;
          font-family: Cousine, monospace;
          padding: 0;
          margin: 0;
        }
      `}</style>

      <Main>
        <Header />
        <Section>
          <p>
            Dorm Dev is new community for student developers in the works! The
            goal is to make it easy to find direction and support in learning
            code, software, and developer tools. I'll try and do this by
            providing a platform that allows access to student-budget friendly
            courses, resources, and tools. I will build a system to verify
            student status and begin searching for discounts on the best courses
            on the web.
          </p>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <a
              style={{ marginRight: "16px" }}
              href="https://twitter.com/dormdev?ref_src=twsrc%5Etfw"
              className="twitter-follow-button"
              data-show-count="true"
              data-size="large"
            >
              Follow @dormdev
            </a>
          </div>
        </Section>
      </Main>

      <NextSeo
        config={{
          title: "Dorm Dev",
          description:
            "The home of student devs. The best online courses, resources, tools and support.",
          canonical: "https://www.dormdev.com/",
          openGraph: {
            url: "https://www.dormdev.com",
            title: "Dorm Dev – Home of Student Devs",
            description:
              "The home of student devs. The best online courses, resources, tools and support.",
            images: [
              {
                url:
                  "https://www.dropbox.com/s/96g29kkop2s42ol/dormdev-og.jpg?raw=1",
                width: 1200,
                height: 900,
                alt: "OG Image"
              }
            ],
            site_name: "Dorm Dev"
          },
          twitter: {
            handle: "@dormdev",
            site: "@dormdev",
            cardType: "summary_large_image"
          }
        }}
      />
    </div>
  );
}

export default Index;

const Main = styled.main`
  color: #fff;
`;

const Section = styled.section`
  margin: 48px auto;
  max-width: 600px;
  p {
    font-size: 18px;
    line-height: 1.4;
  }
  a {
    color: white;
  }
`;
