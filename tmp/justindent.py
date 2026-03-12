import os
from bs4 import BeautifulSoup

# Define the directory where your HTML files are located
# "." means the current folder where the script is sitting
target_dir = "./"

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            with open(file_path, "r", encoding="utf-8") as f:
                # Load the messy/unformatted HTML
                soup = BeautifulSoup(f, "html.parser")

            # soup.prettify() adds consistent indentation (default is 1 space)
            # and places each tag on its own line.
            formatted_html = soup.prettify()

            with open(file_path, "w", encoding="utf-8") as f:
                f.write(formatted_html)
            
            print(f"Successfully formatted: {file_path}")

print("\nAll files have been prettified!")