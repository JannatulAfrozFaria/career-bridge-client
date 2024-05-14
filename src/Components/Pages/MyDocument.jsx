import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Your Job Application Is Successful! Thanks For Your Interest! We will contact you soon. Wish You Good Luck! </Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default MyDocument;
