defmodule Api.Crawler do
  use Api.Web, :controller
  alias Craigslist.{Client, Parser}
  def crawl(conn, %{"search" => search}) do
    results = Client.search(search) |> Parser.get_items
    send_resp(conn, 200, Poison.encode!(results))
  end
end
