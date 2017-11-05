defmodule Craigslist.Client do
  require Logger
  def search(query) do
    url = "https://saltlakecity.craigslist.org/search/sss?format=rss&sort=rel&query=#{query}"
      result = HTTPoison.get!(url)
      case result do
        %HTTPoison.Response{body: body, status_code: 200} ->
          {:ok, body}
        %HTTPoison.Response{body: body, status_code: _} ->
          Logger.info("search failed #{inspect body}")
          {:error, nil}
      end
  end






end
