import urllib.request
import PyPDF2
import io

pdf_url = "https://ugeac25-falt-1.tiiny.site/UGEAC25_FALT-1.pdf"

try:
    print(f"Downloading PDF from {pdf_url}...")
    req = urllib.request.Request(pdf_url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    pdf_bytes = response.read()
    
    print("Extracting text...")
    reader = PyPDF2.PdfReader(io.BytesIO(pdf_bytes))
    text = ""
    # Read first 5 pages to get a good chunk of cutoffs
    for page_num in range(min(5, len(reader.pages))):
        page = reader.pages[page_num]
        text += page.extract_text() + "\n--- PAGE BREAK ---\n"
        
    with open("cutoff_text.txt", "w", encoding="utf-8") as out_file:
        out_file.write(text)
    print("Successfully extracted cutoff text to cutoff_text.txt")
except Exception as e:
    print(f"Error: {e}")
