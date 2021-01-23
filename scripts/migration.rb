require 'fileutils'

files = Dir.glob("#{Dir.home}/dev/personal-website-gatsby/src/pages/blog/*")

files.each do |f|
  of = "#{f}/index.md"
  df = "#{Dir.home}/dev/damien-personal-blog/content/posts/#{f.split('/')[-1]}.md"

  FileUtils.cp(of, df)
end
