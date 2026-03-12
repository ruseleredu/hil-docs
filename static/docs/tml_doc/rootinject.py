import os
from bs4 import BeautifulSoup

# The base HTML template (we'll replace RELATIVE_PATH dynamically)
html_template = """
<a aria-label="HIL Documentation" class="md-header__button md-logo" data-md-component="logo" href="{path}../index.html" title="HIL Documentation">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 5h-7.586l-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 5h5.586l2 2H20v12H4V5z"/>
    </svg>
</a>
"""

target_class = "md-header__inner md-grid"

for root, dirs, files in os.walk("./"):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            # Calculate how many levels deep the file is to set the correct ../
            # root.count(os.sep) tells us the depth
            depth = root.replace("./", "").count(os.sep)
            if root == "./":
                rel_path = ""
            else:
                rel_path = "../" * (depth + 1)

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            soup = BeautifulSoup(content, "html.parser")
            target_nav = soup.find("nav", class_=target_class)

            if target_nav:
                # Format the template with the correct relative path
                formatted_link = html_template.format(path=rel_path)
                new_element = BeautifulSoup(formatted_link, "html.parser")
                
                # Injects the logo at the start of the header
                target_nav.insert(0, new_element) 

                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(str(soup))
                print(f"Injected logo with path '{rel_path}' into: {file_path}")