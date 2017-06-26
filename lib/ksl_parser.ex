defmodule KSL.Parser do
  def get_listings(response) do
    response |> Floki.find(".listing")
  end

end
