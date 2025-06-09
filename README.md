# pskeshu.github.io

Personal website with Jekyll-powered blog.

## How to Add a Blog Post

1. **Create the post file** in the `_posts/` directory with this naming format:
   ```
   YYYY-MM-DD-N_short-title.md
   ```
   Example: `_posts/2025-06-09-1_cell-biology.md`

2. **Add front matter** at the top of your file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title Here"
   date: 2025-06-09 10:00:00 +0000
   ---
   ```

3. **Write your content** below the front matter using Markdown.

4. **Save and commit** your changes - the post will automatically appear on the blog.

## URLs
- Your post will be accessible at: `/blog/N_short-title/`
- All posts are listed at: `/blog/`

## Notes
- Use today's date or earlier (Jekyll won't show future-dated posts)
- Quote your title if it contains colons or special characters
- The numbering system (1_, 2_, 3_) keeps posts organized chronologically