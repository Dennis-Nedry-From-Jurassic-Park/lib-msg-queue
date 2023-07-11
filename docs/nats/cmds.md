 nats stream view --since=1y1d4h

cn=d.n.f.j.p

  178  GO111MODULE=on go get github.com/nats-io/nats-server/v2
  179  GO111MODULE=on go get github.com/nats-io/nats.go/@latest
  181  nats bench foo --pub 1 --size 16
  182  curl -L https://github.com/nats-io/natscli/releases/download/v0.0.35/nats-0.0.35-amd64.rpm
  183  curl -L https://github.com/nats-io/natscli/releases/download/v0.0.35/nats-0.0.35-linux-amd64.zip -o nats-0.0.35.zip
  184  nats-0.0.35-linux-amd64 bench foo --pub 1 --size 16
  186  nats bench foo --pub 1 --size 16
  187  sudo dpkg -i nats-0.0.35-amd64.deb
  189  curl -L https://github.com/nats-io/natscli/releases/download/v0.0.35/nats-0.0.35-amd64.deb -o nats-0.0.35-amd64.deb
  190  sudo dpkg -i nats-0.0.35-amd64.deb
  191  nats
  192  nats bench foo --pub 1 --sub 1 --size 16
  193  nats
  194  nats bench foo --pub 1 --size 1024 --connection-name=
  195  nats bench foo --pub 1000 --size 1024 --connection-name=
  196  nats bench foo --pub 5 --size 1024 --connection-name=
  197  nats bench foo --pub 3 --size 1024 --connection-name=
  198  nats bench foo --pub 2 --size 1024 --connection-name=
  199  nats bench foo --pub 3 --size 1024 --connection-name=
  200  nats bench foo --pub 1 --size 1024 --connection-name=
  201  nats bench foo --pub 1 --size 1024 --msgs 10000 --connection-name=
  202  nats bench foo --pub 1 --size 1024 --msgs 100000 --connection-name=
  203  nats bench foo --pub 1 --size 1024 --msgs 10000 --connection-name=
  203  nats bench foo --pub 1 --size 1024 --msgs 10000 --connection-name=
  204  nats bench foo --sub 1 --size 1024 --msgs 10000 --connection-name=
  205  nats bench foo --pub 1 --size 1024 --msgs 100000 --connection-name=
  206  nats bench foo --pub 1 --size 1024 --msgs 1000000 --connection-name=
  207  nats bench foo --pub 1 --size 1024 --msgs 10000 --connection-name= --request
  208  nats bench foo --pub 1 --size 1024 --msgs 100000 --connection-name= --request
  209  nats bench foo --pub 1 --size 1024 --msgs 1000000 --connection-name= --request
  210  nats bench foo --sub 1 --reply
  211  go get github.com/nats-io/nats-server
  220  yay nats-server
  221  curl -L https://github.com/nats-io/nats-server/releases/download/v2.9.8-386/nats-server-v2.9.8-386-linux-amd64.zip -o nats-server.ziphttps://github.com/nats-io/nats-server/releases/download/v2.9.8-386/nats-server-v2.9.8-386-linux-amd64.zip -o nats-server.zip
  222  unzip nats-server.zip -d nats-server
  225  unzip nats-server.zip -d nats-server
  228  unzip ./nats-server.zip -d nats-server
  229  rm -rf nats-server.zip
  231  wget https://github.com/nats-io/gnatsd/releases/download/v2.9.8/nats-server-v2.9.8-linux-amd64.zip -o nats-server.zip
  233  unzip nats-server.zip -d nats-server
  235  unzip nats-server.zip -d nats-server
  236  sudo unzip nats-server.zip -d nats-server
  239  7z x nats-server.zip
  241  7z x nats-server-v2.9.8-linux-amd64.zip7z x nats-server-v2.9.8-linux-amd64.zip
  243  cd nats-server-v2.9.8-linux-amd64
  245  sudo cp nats-server /usr/binsudo cp nats-server /usr/bin
  246  sd /usr/bin/nats-server
  247  СЃd /usr/bin/nats-server
  249  СЃd /usr/bin/nats-server
  250  nats-server -m 8222 -js
  252  7z x nats-0.0.35.zip
  254  nats-server -m 8222 -js
  255  sudo systemctl enable nats
  256  sudo systemctl start nats
  257  nats-server -m 8222 -js
  261  cd nats_backup
  267  nats bench foo --pub 1 --size 1024 --msgs 10000 --connection-name= --request
  268  nats bench foo --pub 1 --size 1024 --msgs 10000 --connection-name=
  269  cd "/tmp/nats/jetstream
  271  cd /tmp/nats/jetstream
  273  nats --help
  274  nats publish  --help
  275  nats latency --server-b localhost:4222 --rate 500000
  276  nats pub 'greet.joe' 'hello'
  277  nats pub msg.test "NATS MESSAGE 2"
  281  cd nats
  286  nano nats.log
  287  cd nats
  291  nats pub msg.test "NATS MESSAGE 2"
  292  nats pub --help
  294  nats pub --help
  295  nats pub cli.demo "message {{.Count}} @ {{.TimeStamp}}" --count=10
  297  cd nats
  301  nats str report
  302  nats account info
  303  nats stream add my_stream
  304  nats pub foo --count=1000 --sleep 1s "publication #{{Count}} @ {{TimeStamp}}"
  305  nats pub foo --count=1000 "publication #{{Count}} @ {{TimeStamp}}"
  311  cd nats
  316  rm -rf nats
  318  nats pub foo --count=9000 "publication #{{Count}} @ {{TimeStamp}}"
  320  nats pub foo --count=1 "publication #{{Count}} @ {{TimeStamp}}"
  325  cd nats
  328  nats stream info my_stream
  330  nats stream info my_stream
  331  nats pub foo --count=100000 "publication #{{Count}} @ {{TimeStamp}}"
  333  nats stream info my_stream
  334  nats pub foo --count=100000 "publication #{{Count}} @ {{TimeStamp}}"
  336  nats stream info my_stream
  337  nats stream view my_stream
  345  nats account --help
  346  nats account backup --help
  347  nats account backup --check -w ~/nats_backup
  348  nats account backup --check -w ~/nats_backup/my_stream_2022.12.03T13:50:00.123456789Z
  349  nats pub foo --count=100000 "publication #{{Count}} @ {{TimeStamp}}"
  350  nats account restore --help
  351  nats account restore ~/nats_backup/my_stream_2022.12.03T13:50:00.123456789Z
  352  nats stream --help
  353  nats stream purge my_stream
  354  nats account restore ~/nats_backup/my_stream_2022.12.03T13:50:00.123456789Z
  355  nats stream --help
  356  nats stream rm my_stream
  357  nats account restore ~/nats_backup/my_stream_2022.12.03T13:50:00.123456789Z
  358  nats str info my_stream
  359  nats pub foo --count=1 "publication #{{Count}} @ {{TimeStamp}}"
  360  nats str info my_stream
  361  nats stream add  my_stream_2
  362  nats pub foo2 --count=100000 "publication #{{Count}} @ {{TimeStamp}}"
  363  nats str info my_stream_2
  364  nats pub foo2 --count=1 "publication #{{Count}} @ {{TimeStamp}}"
  365  nats str info my_stream_2
  366  nats str info my_stream_3
  367  nats stream add  my_stream_3
  368  nats stream view  my_stream_3
  369  nats pub foo3 --count=1 "publication #{{Count}} @ {{TimeStamp}}"
  370  nats stream view  my_stream_3
  371  nats pub foo3 --count=1 "publication #{{Count}} @ {{TimeStamp}}"
  372  nats stream view  my_stream_3
  373  nats pub foo3 --count=1 "publication #{{Count}} @ {{TimeStamp}}"
  374  nats stream view  my_stream_3
  375  nats stream add  my_stream_4
  376  nats stream view  my_stream_4
  377  nats pub foo4 --count=1 "publication #{{Count}} @ {{TimeStamp}}"
  378  nats stream view  my_stream_4
  379  nats pub foo4 --count=1 "publication #{{Count}} @ {{TimeStamp}}"
  380  nats stream view  my_stream_4
  381  nats pub foo4 --count=4 "publication #{{Count}} @ {{TimeStamp}}"
  382  nats stream view  my_stream_4
  383  nats-server -m 8222 -js -store file -dir nats -max_msgs 10
  384  nats-server -m 8222 -js
  385  ls -a /tmp/nats/jetstream
  386  nats-server -m 8222 -js -l nats.log
  387  nats-server -m 8222 -js
  388  nats-server -m 8222 -js -l nats.log
  390  nano nats.log
  391  nats-server -m 8222 --jetstream -l nats.log
  392  nano nats.log
  394  nats-server -m 8222 --jetstream -l nats.log
  395  nats-server -m 8222 --jetstream --store_dir ./nats -l nats.log
  397  nano nats.log
  398  cd nats
  402  nats-server -m 8222 --jetstream --store_dir ./nats -l nats.log
  405  nats-server -m 8222 --jetstream --store_dir ./nats --msgs 5 -l nats.log
  406  nats-server -m 8222 --jetstream --store_dir ./nats 5 -l nats.log
  407  nats-server -m 8222 --jetstream --store_dir ./nats -l nats.log
  408  nats-server -m 8222 --jetstream --store_dir ./nats
  409  nats-server -m 8222 --jetstream --store_dir ./nats -l nats.log
  410  nats-server -m 8222 --jetstream --store_dir ./nats
  412  nats-server -m 8222 --jetstream --store_dir ./nats
  458  nats-server -m 8222 -p 4222 --jetstream --store_dir ./nats
  459  nats-server -m 8222 --jetstream --store_dir ./nats
  477  nats view
  478  nats stream
  479  nats stream info
  480  nats stream add contact-person
  481  nats stream add test
  482  nats stream info
  483  nats stream view
  484  nats stream view test
  485  nats stream view test
  486  nats stream
  487  nats stream info test
  488  nats stream view test
  489  nats stream info test
  490  nats stream view test
  491  nats stream view test 1
  492  nats stream view test --help
  493  nats stream view test --subject=contact-person --help
  494  nats stream view test --subject=contact-person
  495  nats stream view test --raw
  496  nats stream view test
  497  nats stream view test id=-1
  498  nats stream view test --id=-1
  499  nats stream view test
  500  nats stream view test --id=-1
  501  nats stream view test
  502  nats stream view
  503  nats stream view mystream --id=-1
  504  nats stream view mystream --subject=contact-person --id=-1
  505  nats stream --help
  506  nats stream view test --subject=contact-person --id=-1
  507  nats stream view test
  508  nats stream view test --help
  509  nats stream rm test
  510  nats stream view test
  511  nats stream --help
  512  nats stream test --help
  513  nats stream test state
  514  nats stream test get
  515  nats stream test edit
  516  nats stream edit test
  517  nats stream
  518  nats stream rm test
  519  nats stream add test
  520  nats stream view test
  521  nats stream
  522  nats stream info test
  523  nats stream rm test
  524  nats stream info test
  525  nats stream add test
  526  nats stream info test
  527  nats stream info test --help
  528  nats stream view test --help
  529  nats stream view test --subject=dto
  530  nats stream view test --subject=contact-person
  531  nats stream view test --subject=contact-person.*
  532  nats stream rm test
  533  nats stream view test --subject=dto
  534  nats stream view test --subject=dto --id=-1
  536  nats stream view test --subject=dto --id=-1
  537  nats stream view test --subject=dto --id=2
  538  nats stream view test --subject=dto --id=-1
  580  nats stream view test --subject=dto
  581  nats
  582  nats consumer
  583  nats consumerls
  584  nats consumer ls
  585  nats consumer view myservice-durable-dto
  586  nats consumer sub myservice-durable-dto
  588  nats consumer view test
  589  nats consumer ls
  590  nats stream view test --subject=dto
  591  nats consumer ls
  592  nats consumer
  593  nats consumer add dto_consumer --help
  594  nats consumer add dto_consumer --target=dto
  595  nats consumer ls
  596  nats consumer sub myservice-durable-dto
  597  nats consumer sub --help
  598  nats consumer sub test myservice-durable-dto
  599  nats consumer sub test
  600  nats consumer sub myservice-durable-dto
  601  nats con ls test
  602  nats con --help
  603  nats con info myservice-durable-dto
  604  nats con add
  606  nats stream view test --subject=dto
  607  nats consumer sub --help
  608  nats consumer view myservice-durable-dto
  609  nats consumer ls
  610  nats consumer
  611  nats consumer sub
  612  nats consumer sub --help
  613  nats consumer sub test dto_pullnats consumer sub test dto_pull
  614  nats consumer sub
  615  nats stream view test --subject=dto
  622  nats stream view my_stream
  623  nats stream info my_stream
  624  nats stream view
  625  nats stream view -h
  626  nats --help
  627  nats latency
  962  history | grep "nats"
  964  history | grep "nats" >> nats.log
