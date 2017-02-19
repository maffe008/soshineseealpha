# File Path : /config/filter_parameter_logging.rb
# Created by maffee on 16/10/9.

# Be sure to restart your server when you modify this file.

# Configure sensitive parameters which will be filtered from the log file.
Rails.application.config.filter_parameters += [:password]
