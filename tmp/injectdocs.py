import os
from bs4 import BeautifulSoup

# The directory you specified
target_dir = "./tml_doc/"

# Your custom HTML block
extra_html = """
<a aria-label="HIL Documentation" class="md-header__button md-logo" data-md-component="logo" href="../index.html" title="HIL Documentation">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 5h-7.586l-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 5h5.586l2 2H20v12H4V5z"/>
    </svg>
</a>
"""

target_class = "md-header__inner md-grid"

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Prevent double injection
            if 'aria-label="HIL Documentation"' in content:
                continue

            soup = BeautifulSoup(content, "html.parser")
            
            # Find the header container
            target_nav = soup.find("nav", class_=target_class)
            
            if target_nav:
                # Parse the extra_html string into a soup fragment
                new_element = BeautifulSoup(extra_html, "html.parser")
                
                # Insert at the very beginning of the <nav> tag
                target_nav.insert(0, new_element)
                
                # Write back the file (preserving existing formatting better than .prettify())
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(str(soup))
                
                print(f"Updated: {file_path}")

print("\nProcess complete.")