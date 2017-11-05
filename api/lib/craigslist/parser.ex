defmodule Craigslist.Parser do
  def get_items({:ok, artifacts}) do

    # descriptions = Floki.find(artifacts, "description")
    title = Floki.find(artifacts, "title")|> Enum.map(&get_title/1)|> Enum.filter(fn(x) -> !is_nil(x) end)
    # links = Floki.find(artifacts, "links")
    # IO.inspect descriptions
    IO.inspect title
    # IO.inspect links
  end
  def get_items({:error, _}) do

  end
  def get_title({"title", _, [title]}) do
    title
  end

  def get_title(_), do: nil
end
