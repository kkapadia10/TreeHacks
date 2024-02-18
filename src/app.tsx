import { Button, Rows, Text, TextInput } from "@canva/app-ui-kit";
import * as React from "react";
import styles from "styles/components.css";


export const App = () => {
  const [urls, setUrls] = React.useState([""]);

  const addUrlField = () => {
    setUrls([...urls, ""]);
  };

  const updateUrl = (index, newValue) => {
    const newUrls = urls.map((url, i) => (i === index ? newValue : url));
    setUrls(newUrls);
  };

  const removeUrlField = (indexToRemove) => {
    setUrls(urls.filter((_, index) => index !== indexToRemove));
  };

  const generateQRCodes = () => {
    // Placeholder for QR code generation logic
    console.log("Generating QR codes for URLs:", urls);
  };

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text>
          Enter the URLs for which you want to generate QR codes. Click "Add Another URL" to add more fields, click on the "Remove" button to remove an input, or "Generate QR Codes" when you're ready.
        </Text>
        {urls.map((url, index) => (
          <Rows key={index} spacing="2u" align="center">
            <TextInput
              value={url}
              onChange={(value) => updateUrl(index, value)}
              placeholder="Enter URL here"
              stretch
            />
            <Button variant="negative" onClick={() => removeUrlField(index)}>
              Remove
            </Button>
          </Rows>
        ))}
        <Button variant="secondary" onClick={addUrlField} stretch>
          Add Another URL
        </Button>
        <Button variant="primary" onClick={generateQRCodes} stretch>
          Generate QR Codes
        </Button>
      </Rows>
    </div>
  );
};
