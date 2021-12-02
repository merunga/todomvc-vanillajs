export const sanitizeHtmlForComparison = (str) => str.replace(/\n|\t/g, ' ').replace(/> *</g, '><').trim();
