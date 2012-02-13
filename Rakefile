namespace :create do
  
  def buildFromGithub(target_url, project_name, version) 
      if project_name != nil
        this_dir = Dir.pwd
        dir_name = this_dir + '/' + project_name
        tmp_dir = dir_name + "/tmp"
          
        if version
          this_version = version
        else 
          this_version = 'master'
        end
                  
        Dir.mkdir(dir_name)
        system("echo directory " + dir_name + " created")
                  
        system("git clone " + target_url + " " + tmp_dir)
        system("git archive --remote=" + tmp_dir + " " + this_version + " | tar -x -C " + dir_name)
        system("rm -rf " + tmp_dir)
        system("rm " + dir_name + "/.gitattributes " + dir_name + "/.gitignore")
                  
        system("echo Create Complete!")
      else
        system("echo ERROR: you must provide a project name by adding project\=\{project_name\}")
      end
  end
  
  desc "create a basic backbonejs folder structure using require.js"
  task :backbonejs do
    github_addr = "git@github.com:andyjamesdavies/create-project-with-rake.git"
    jquery_ver = "1.7.1"
    require_ver = "1.0.5"
    project_name = ENV['project']
    
    if project_name != nil
      this_dir = Dir.pwd
      dir_name = this_dir + '/' + project_name
     
      Dir.mkdir(dir_name)
      system("echo directory " + dir_name + " created")
      
      tmp_dir = dir_name + "/tmp"
      tmp2_dir = dir_name + "/tmp2"
      
      system("git clone " + github_addr + " " + tmp_dir)
      
      Dir.mkdir(tmp2_dir)
 
      system("git archive --remote=" + tmp_dir + " master | tar -x -C " + tmp2_dir)      
      
      system("cp -R " + tmp2_dir + "/templates/backbonejs/* " + dir_name)
     
      system("rm -rf " + tmp_dir + " " + tmp2_dir)
      
      libs_dir = dir_name + "/libs"
      Dir.mkdir(libs_dir)
      
      system("curl http://ajax.googleapis.com/ajax/libs/jquery/" + jquery_ver + "/jquery.min.js > " + libs_dir +  "/jquery.min.js") 
      system("curl http://documentcloud.github.com/underscore/underscore-min.js > " + libs_dir + "/underscore.min.js")
      system("curl http://documentcloud.github.com/backbone/backbone-min.js > " + libs_dir + "/backbone.min.js")
      system("curl http://requirejs.org/docs/release/" + require_ver + "/minified/require.js > " + libs_dir + "/require.min.js")
      system("curl http://requirejs.org/docs/release/" + require_ver + "/minified/order.js > " + dir_name + "/assets/js/order.js")
      
      system("echo Create Complete!")
    else 
      system("echo ERROR: you must provide a project name by adding project\=\{project_name\}")
    end
  end
  
  desc "create html5 boilerplate template from the github project"
  task :html5boilerplate do
    target_url = "https://github.com/h5bp/html5-boilerplate.git"
    version = "v3.0.1stripped"
    project_name = ENV['project']
    
    buildFromGithub(target_url, project_name, version)
  end
  
  desc "create twitter bootstrap project from the github repo"
  task :twitterBootstrap do
    target_url = "https://github.com/twitter/bootstrap.git"
    version = "v2.0.0"
    project_name = ENV['project']
     
    buildFromGithub(target_url, project_name, version) 
  end
end
  