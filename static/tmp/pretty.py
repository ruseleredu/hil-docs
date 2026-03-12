from bs4 import BeautifulSoup
import os

extra_html_code = '<div class="injected">Formatted Content</div>'

for root, dirs, files in os.walk("./"):
    for file in files:
        if file.endswith(".html"):
            path = os.path.join(root, file)
            
            with open(path, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")

            # Find the specific nav tag
            target = soup.find("nav", class_="md-header__inner md-grid")
            
            if target:
                # Create the new element
                new_element = BeautifulSoup(extra_html_code, "html.parser")
                # Insert it right after the target
                target.insert_after(new_element)
                
                # Save with 'prettify' to fix all indentation in the file
                with open(path, "w", encoding="utf-8") as f:
                    f.write(soup.prettify())
                print(f"Beautifully updated: {path}")