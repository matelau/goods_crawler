defmodule Api.Crawler do
  use Api.Web, :controller

  def crawl(conn, params) do
    IO.inspect(conn)
    IO.inspect(params)
    send_resp(conn, 200, Poison.encode!(params))
  end
end
