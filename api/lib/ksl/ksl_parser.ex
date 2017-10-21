defmodule KSL.Parser do
  def get_listings(response) do
    _description = response |> Floki.find(".listing") |> Enum.map(fn(listing) ->
                                                                                %{title: get_title(listing),
                                                                                price: get_price(listing),
                                                                                description: get_description(listing)}
                                                                              end)


  end

  def get_price(listing) do
    IO.puts "price:"
    listing
    |> Floki.raw_html
    |> Floki.find(".price")
    |> IO.inspect
  end


  def get_description(listing) do
    IO.puts "description:"
    listing
    |> Floki.raw_html
    |> Floki.find(".description")
    |> IO.inspect
  end

  def get_title(listing) do
    IO.puts "title:"
    listing
    |> Floki.raw_html
    |> Floki.find(".title")
    |> IO.inspect
  end

end
