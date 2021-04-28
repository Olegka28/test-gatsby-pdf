import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [isClient, setIsClient] = React.useState(false)
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  })
  React.useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {isClient && (
        // <PDFDownloadLink
        //   document={
        //     <Document>
        //       <Page size="A4" style={styles.page}>
        //         <View style={styles.section}>
        //           <Text>Section #1</Text>
        //         </View>
        //         <View style={styles.section}>
        //           <Text>Section #2</Text>
        //         </View>
        //       </Page>
        //     </Document>
        //   }
        //   fileName="somename.pdf"
        // >
        //   {({ blob, url, loading, error }) =>
        //     loading ? "Loading document..." : "Download now!"
        //   }
        // </PDFDownloadLink>
        // <PDFViewer>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
        // </PDFViewer>
      )}
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
