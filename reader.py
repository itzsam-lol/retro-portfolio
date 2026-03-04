import pypdf
reader = pypdf.PdfReader('Resume_Satyam.pdf')
text = '\n'.join([page.extract_text() for page in reader.pages])
with open('resume_utf8.txt', 'w', encoding='utf-8') as f:
    f.write(text)
