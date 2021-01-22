require 'fileutils'

folders = Dir.glob("#{Dir.home}/dev/personal-website-gatsby/src/pages/blog/*")

folders.each do |folder|
  files = Dir.glob("#{folder}/*")
  files.each do |file|
    if !file.include?(".md")
      df = "#{Dir.home}/dev/damien-next/public/images/#{file.split('/')[-1]}"
      FileUtils.cp(file, df)
    end
  end
end
