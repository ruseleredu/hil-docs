import os
from bs4 import BeautifulSoup

# The directory to search
target_dir = "./"

# The target container and the URL we want to replace
target_container_class = "wh_logo_and_publication_title"
old_url = "https://www.typhoon-hil.com"

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            # Calculate dynamic path back to root
            relative_root = os.path.relpath(target_dir, root)
            path_prefix = relative_root.replace("\\", "/")
            path_prefix = "" if path_prefix == "." else path_prefix + "/"
            
            new_url = f"{path_prefix}../index.html"

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Only process if the old URL exists in the file
            if old_url not in content:
                continue

            soup = BeautifulSoup(content, "html.parser")
            
            # Find the div container
            container = soup.find("div", class_=target_container_class)
            
            if container:
                # Find the link (<a>) inside that container
                logo_link = container.find("a", href=old_url)
                
                if logo_link:
                    # Replace the href attribute
                    logo_link['href'] = new_url
                    
                    # Save the changes
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(str(soup))
                    
                    print(f"Updated logo link in: {file_path} -> {new_url}")

print("\nURL replacement complete.")