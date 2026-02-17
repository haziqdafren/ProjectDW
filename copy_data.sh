#!/bin/bash
# Run this script from Terminal ONCE to copy all data files from iCloud into the repo.
# Usage: bash ~/projectDW/osn-dashboard/copy_data.sh

set -e

# Find the iCloud folder
ICLOUD_BASE=$(python3 -c "
import os
docs = os.path.expanduser('~/Documents')
for item in os.listdir(docs):
    if 'MacBook' in item:
        print(os.path.join(docs, item, 'Kuliah', 'Project_DW', 'Phyton_Dw'))
        break
")

DEST=~/projectDW/osn-dashboard

echo "Source: $ICLOUD_BASE"
echo "Dest:   $DEST"
echo ""

# Force iCloud to download everything first
echo "Step 1: Triggering iCloud download..."
brctl download "$ICLOUD_BASE" 2>/dev/null || true
brctl download "$ICLOUD_BASE/Medali_Provinsi" 2>/dev/null || true
brctl download "$ICLOUD_BASE/Medali_Sekolah" 2>/dev/null || true
brctl download "$ICLOUD_BASE/Partisipan_Provinsi" 2>/dev/null || true
brctl download "$ICLOUD_BASE/JenjangSekolah" 2>/dev/null || true

echo "Waiting 15 seconds for iCloud download to start..."
sleep 15

# Copy xlsx data files
echo ""
echo "Step 2: Copying data files..."

copy_xlsx() {
    local src_folder="$1"
    local dst_folder="$2"
    mkdir -p "$dst_folder"
    for f in "$src_folder"/*.xlsx; do
        [ -f "$f" ] || continue
        filename=$(basename "$f")
        echo "  Copying: $filename"
        cp "$f" "$dst_folder/$filename"
    done
}

copy_xlsx "$ICLOUD_BASE/Medali_Provinsi"    "$DEST/data/raw/Medali_Provinsi"
copy_xlsx "$ICLOUD_BASE/Medali_Sekolah"    "$DEST/data/raw/Medali_Sekolah"
copy_xlsx "$ICLOUD_BASE/Partisipan_Provinsi" "$DEST/data/raw/Partisipan_Provinsi"
copy_xlsx "$ICLOUD_BASE/JenjangSekolah"    "$DEST/data/raw/JenjangSekolah"

# Copy Python files
echo ""
echo "Step 3: Copying Python files..."

mkdir -p "$DEST/analysis/scripts"

SCRIPTS=(dataCleaning.py grafikMP.py saran.py saran1.py test.py)
for f in "${SCRIPTS[@]}"; do
    src="$ICLOUD_BASE/$f"
    [ -f "$src" ] && cp "$src" "$DEST/analysis/scripts/$f" && echo "  Copied: $f"
done

SUBDIR_SCRIPTS=(
    "Medali_Sekolah/Medali_Sekolah.py"
    "Medali_Sekolah/grafikMS.py"
    "Partisipan_Provinsi/Partisipan.py"
    "Partisipan_Provinsi/grafikP.py"
    "JenjangSekolah/Sekolah.py"
    "JenjangSekolah/grafikS.py"
)
for rel in "${SUBDIR_SCRIPTS[@]}"; do
    src="$ICLOUD_BASE/$rel"
    dst_name=$(basename "$rel")
    [ -f "$src" ] && cp "$src" "$DEST/analysis/scripts/$dst_name" && echo "  Copied: $dst_name"
done

# Commit everything
echo ""
echo "Step 4: Committing to git..."
cd "$DEST"
git add data/ analysis/scripts/ 2>/dev/null || true
git diff --cached --quiet || git commit -m "Add data files and original Python scripts"

echo ""
echo "Done! All files copied and committed."
echo "Next: push to GitHub with:"
echo "  cd ~/projectDW/osn-dashboard"
echo "  git remote add origin https://github.com/YOUR_USERNAME/osn-dashboard.git"
echo "  git push -u origin main"
