{application,ksl_crawler,
             [{applications,[kernel,stdlib,elixir,logger,httpoison,floki]},
              {description,"ksl_crawler"},
              {modules,['Elixir.KSL.Client','Elixir.KSL.Crawler',
                        'Elixir.KSL.Parser']},
              {registered,[]},
              {vsn,"0.1.0"},
              {extra_applications,[logger,httpoison]}]}.
