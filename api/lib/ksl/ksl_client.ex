defmodule KSL.Client do
  use HTTPoison.Base
  require Logger
  defp root_url, do: "https://www.ksl.com/classifieds/s/"
  def get_category(category) do
    url = root_url <> category
    Logger.info("fetcing: #{url}")
    case get(url) do
    {:ok, %HTTPoison.Response{ status_code: code, body: body}}
    when code != 200 ->
      Logger.error("There was something with the request #{url}")
      {:error, "bad request"}
    {:ok, %HTTPoison.Response{body: body, headers: _headers}} ->
      body
    {:error, err} ->
      Logger.error(err)
    end
  end


end
