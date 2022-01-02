-- Make highest level h2 since article title is h1
function Header(el)
  el.level = el.level + 1
  return el
end

-- Intermediate store for variables and their values
local variables = {}

-- Function called for each raw block element
function RawBlock(el)
  -- Don't do anything unless the block contains *org* markup
  if el.format ~= 'org' then return nil end

  -- Extract variable name and value
  local name, value = el.text:match '#%+(%w+):%s*(.+)$'
  if name and value then
    if name == 'tags' then
      local tags = {}
      for tag in string.gmatch(value, '([^,]+)') do
        tags[#tags + 1] = tag
      end

      variables[name] = tags
    else
      variables[name] = value
    end
  end

  return {}
end

-- Add the extracted variables to the document's metadata
function Meta(meta)
  for name, value in pairs(variables) do
    meta[name] = value
  end
  return meta
end