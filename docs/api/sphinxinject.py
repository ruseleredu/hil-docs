import os
from bs4 import BeautifulSoup

target_dir = "./"
target_li_class = "nav-item-0"

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            # Dynamic path logic
            relative_root = os.path.relpath(target_dir, root)
            path_prefix = relative_root.replace("\\", "/")
            path_prefix = "" if path_prefix == "." else path_prefix + "/"

            extra_li_html = f'<li class="nav-item"><a href="{path_prefix}../index.html"> Docs </a> &#187; </li>'

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            if f'href="{path_prefix}../index.html"> Docs </a>' in content:
                continue

            soup = BeautifulSoup(content, "html.parser")
            
            # Find ALL occurrences of the landmark
            landmarks = soup.find_all("li", class_=target_li_class)
            
            if landmarks:
                # OPTION A: Inject into BOTH (Header and Footer)
                for landmark in landmarks:
                    new_li = BeautifulSoup(extra_li_html, "html.parser")
                    landmark.insert_before(new_li)
                
                # OPTION B: If you ONLY want the first one (Header), 
                # comment out the loop above and use:
                # landmarks[0].insert_before(BeautifulSoup(extra_li_html, "html.parser"))

                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(str(soup))
                
                print(f"Updated {len(landmarks)} breadcrumbs in: {file_path}")

print("\nProcessing finished.")